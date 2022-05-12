import { ReactNode, useEffect, useState } from 'react'
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
  labels: Record<string, string>
}

export const SelectDropDown = (
  {
    searchValue,
    caption,
    labels,
    data,
    selectedValues,
    variant = 'light'
  }: SelectPopUpProps
) => {
  const [selectedValuesState, setSelectedValuesState] = useState(selectedValues || [])
  const [searchValueState, setSearchValueState] = useState(searchValue)
  const [filteredData, setFilteredData] = useState<Option[]>([])

  useEffect(() => {
    setFilteredData(
      data.filter(option => (
        option.value.toLowerCase().includes(searchValueState.toLowerCase()) &&
        !selectedValuesState.find(selectedOption => selectedOption.value === option.value)
      ))
    )
  }, [searchValueState, selectedValuesState])

  const handleSelect = (option: Option) => {
    setSelectedValuesState([...selectedValuesState, option])
  }

  const handleRemove = (option: Option) => {
    setSelectedValuesState(selectedValuesState.filter(selectedOption => selectedOption.value !== option.value))
  }

  return (
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
          checked={filteredData.length === 0}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedValuesState(data)
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
  )
}
