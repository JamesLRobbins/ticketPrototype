import React, { useState } from 'react'
import { Button, Segment, Form, Header, Divider, Icon, Grid } from "semantic-ui-react"

function Ticket() {
const [data, setData] = useState([])
const [paycodes, setPaycodes] = useState([])

const handleClickPunches=() => {
  setData([...data, {timeIn: "", timeOut: ""}])
}

const handleClickPaycode=() => {
  setPaycodes([...paycodes, {paycode: "", amount: ""}])
}

const handleChange=(e, i) => {
  const {name,value}=e.target
  const onChangeVal = [...data]
  onChangeVal[i][name]=value
  setData(onChangeVal)
}

const handleDeletePaycode=(i) => {
  const deleteVal = [...paycodes]
  deleteVal.splice(i, 1)
  setPaycodes(deleteVal)
}

const handleDeletePunch=(i) => {
  const deleteVal = [...data]
  deleteVal.splice(i, 1)
  setData(deleteVal)
}

const paycodesOptions = [
  {key: "pto", text: "PTO", value: "pto"},
  {key: "cto", text: "CTO", value: "cto"},
  {key: "mato", text: "MATO", value: "mato"},
  {key: "brvm", text: "Bereavement", value: "bereavement"},
  {key: "jd", text: "Jury Duty", value: "Jury Duty"},
]

console.log(data)

  return (
    <Segment>
      <Header as="h1">Payroll Correction Request</Header>
      <Header as="h5">HRBPs & People Leaders - submit kronos corrections for review here - Not for PPX employees</Header>
      <Divider />
      <Form>
        <Form.Field>
          <label>Requested For:</label>
          <input placeholder='Name'></input>
        </Form.Field>
        <Form.Field disabled>
          <label>Employee ID</label>
          <input placeholder='Employee ID'></input>
        </Form.Field>
        <Form.Field disabled>
          <label>Department Number</label>
          <input placeholder='Department Number'></input>
        </Form.Field>
        <Form.Field disabled>
          <label>Pay Group</label>
          <input placeholder='Pay Group'></input>
        </Form.Field>
        <Form.Field disabled>
          <label>Location</label>
          <input placeholder='Location'></input>
        </Form.Field>
          <Form.Field label="Terminated Employee <select>" control="select">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </Form.Field>
          <Form.Field>
          <label>Choose your HRBP</label>
          <input placeholder='HRBP'></input>
        </Form.Field>
        <Divider />
        <h4>Corrections Needed</h4>
        <Grid celled columns={2}>
          <Grid.Row>
            <Grid.Column textAlign='center'><h5>Timestamps - <i>(Missing timestamps or timestamp corrections)</i></h5></Grid.Column>
            <Grid.Column textAlign='center'><h5>Paycodes - <i>(Missing paycodes)</i></h5></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column><Button primary icon onClick={handleClickPunches}>
          <Icon name="add" />New Timestamp</Button></Grid.Column>
          <Grid.Column><Button primary icon onClick={handleClickPaycode}>
          <Icon name="add" />Add Paycode </Button></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            {
          data.map((val, i)=>
          <Form.Group>
            <Form.Input placeholder="Time In" value={val.timeIn} onChange={(e)=>handleChange(e,i)} />
            <Form.Input placeholder="Time Out" value={val.timeOut} onChange={(e)=>handleChange(e,i)} />
            <Button color="red" icon="delete" onClick={()=>handleDeletePunch(i)} />
          </Form.Group>
          )
        }
            </Grid.Column>
            <Grid.Column>
            {
            paycodes.map((val, i)=>
            <Form.Group>
              <Form.Select placeholder="paycode" value={val.paycode} options={paycodesOptions}/>
              <Form.Input placeholder="amount" value={val.amount} onChange={(e)=>handleChange(e,i)} />
              <Button color="red" icon="delete" onClick={()=>handleDeletePaycode(i)} />
            </Form.Group>
            )
        }
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form.Button color='primary'>Submit Correction</Form.Button>
      </Form>



</Segment>
  )
}

export default Ticket




