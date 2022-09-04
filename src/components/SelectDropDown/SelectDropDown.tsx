import { CSSProperties, ReactNode, useEffect, useState } from 'react'
import { Form, ListGroup } from 'react-bootstrap'
import { Option } from '../../models/Option'
import { RichDropDown } from '../RichDropDown/RichDropDown'
import { SearchControl } from '../SearchControl/SearchControl'
import { TextAndTags } from '../TextAndTags/TextAndTags'

import './SelectDropDown.css'

export interface SelectPopUpProps {
  searchValue: string,
  caption: ReactNode,
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | undefined,
  data: Option[],
  selectedValues: Option[],
  labels: {
    search: string,
    all: string
  },
  style: CSSProperties,
  onChange: (selectedValues: Option[]) => void
}

export const SelectDropDown = (
  {
    searchValue,
    caption,
    labels,
    data,
    selectedValues,
    variant = 'light',
    style = {},
    onChange
  }: SelectPopUpProps
) => {
  const [selectedValuesState, setSelectedValuesState] = useState(selectedValues || [])
  const [searchValueState, setSearchValueState] = useState(searchValue)
  const [filteredData, setFilteredData] = useState<Option[]>(data)
  const [dataState, setDataState] = useState<Option[]>(data)

  useEffect(() => {
    setDataState(data)
    setFilteredData(
      data.filter(option => (
        option.value.toLowerCase().includes(searchValueState.toLowerCase()) &&
        !selectedValuesState.find(selectedOption => selectedOption.value === option.value)
      ))
    )
  }, [data])

  useEffect(() => {
    setFilteredData(
      dataState.filter(option => (
        option.value.toLowerCase().includes(searchValueState.toLowerCase()) &&
        !selectedValuesState.find(selectedOption => selectedOption.value === option.value)
      ))
    )
  }, [searchValueState, selectedValuesState])

  useEffect(() => {
    onChange(selectedValuesState)
  }, [selectedValuesState])

  const handleSelect = (option: Option) => {
    const newSelectedValues = [...selectedValuesState, option]
    setSelectedValuesState(newSelectedValues)
  }

  const handleRemove = (option: Option) => {
    const newSelectedValues = selectedValuesState.filter(selectedOption => selectedOption.value !== option.value)
    setSelectedValuesState(newSelectedValues)
  }

  return (
    <>
      <RichDropDown
        className='filter-select'
        caption={<>
          {caption}
          {
            selectedValuesState.length > 0 &&
            <TextAndTags tagsColour='#81B622' tags={[selectedValuesState.length.toString()]}/>
          }
        </>}
        variant={variant}
        style={style}
      >
        <ListGroup.Item>
          <SearchControl
            placeholder={labels.search}
            value={searchValueState}
            onChange={(value) => { setSearchValueState(value) }}
          />
        </ListGroup.Item>

        <ListGroup.Item>
          <Form.Check
            label={ labels.all }
            checked={selectedValuesState.length === dataState.length}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedValuesState(dataState)
              } else {
                setSelectedValuesState([])
              }
            }}
          />
        </ListGroup.Item>

        {selectedValuesState && selectedValuesState.length > 0 && (
          <ListGroup className='selected-list' variant='flush' style={{ maxHeight: '200px', overflow: 'auto' }}>
            {selectedValuesState.map((value, i) => (
              <ListGroup.Item key={i}>
                <Form.Check checked={true} onChange={() => handleRemove(value)} type='checkbox' name={value.id.toString()} label={value.value} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}

        {filteredData && filteredData.length > 0 && (
          <ListGroup variant='flush' style={{ maxHeight: '200px', overflow: 'auto' }}>
            {filteredData.map((value, i) => (
              <ListGroup.Item key={i}>
                <Form.Check checked={false} onChange={() => handleSelect(value)} type='checkbox' name={value.id.toString()} label={value.value} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </RichDropDown>
    </>
  )
}
