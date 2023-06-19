import React, { useState } from 'react'
import { Button, Segment, Form, Header, Divider, Container, Modal, Grid, Icon } from "semantic-ui-react"
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

function Ticket() {
const [data, setData] = useState([])
const [paycodes, setPaycodes] = useState([])

const handleClickPunches=() => {
  setData([...data, {date: "", timeIn: "", timeOut: ""}])
}

const handleClickPaycode=() => {
  setPaycodes([...paycodes, {date: "", paycode: "", amount: ""}])
}

const handleChangeData=(e, i) => {
  const {name,value}=e.target
  const onChangeVal = [...data]
  onChangeVal[i][name]=value
  setData(onChangeVal)
}

const handleChangePaycode=(e, i) => {
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

const [startDate, SetStartDate] = useState(new Date())

const [open, setOpen] = React.useState(false)

console.log(data)

  return (
    <Container>
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
        <h5>Please select button below to document corrections</h5>
        <Modal
   onClose={() => setOpen(false)}
   onOpen={() => setOpen(true)}
   open={open}
   trigger={<Button>Add Corrections</Button>}
 >
   <Modal.Header>Kronos Correction</Modal.Header>
   <Modal.Content>
   <Form>
   <Grid celled>
<Grid.Row>
  <Grid.Column textAlign='center'><h5>Timestamps - <i>(Missing timestamps or timecard corrections)</i></h5></Grid.Column>
  
</Grid.Row>
<Grid.Row>
  <Grid.Column><Button primary icon onClick={handleClickPunches}>
<Icon name="add" />New Timestamp</Button></Grid.Column>

</Grid.Row>

  {
data.map((val, i)=>
<Form.Group>
  <DatePicker selected={startDate} onChange={(date) => SetStartDate(date)}/>
  <Form.Input placeholder="Time In" value={val.timeIn} onChange={(e)=>handleChangeData(e,i)} />
  <Form.Input placeholder="Time Out" value={val.timeOut} onChange={(e)=>handleChangeData(e,i)} />
  <Button color="red" icon="delete" onClick={()=>handleDeletePunch(i)} />
</Form.Group>
)
}
<Grid.Row>
<Grid.Column textAlign='center'><h5>Paycodes - <i>(Missing paycodes)</i></h5></Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column><Button primary icon onClick={handleClickPaycode}>
<Icon name="add" />Add Paycode </Button></Grid.Column>
</Grid.Row>
{
  paycodes.map((val, i)=>
  <Form.Group>
    <DatePicker selected={startDate} onChange={(date) => SetStartDate(date)}/>
    <Form.Select placeholder="paycode" value={val.paycode} onChange={(e)=>handleChangePaycode(e,i)} options={paycodesOptions}/>
    <Form.Input placeholder="amount" value={val.amount} onChange={(e)=>handleChangePaycode(e,i)} />
    <Button color="red" icon="delete" onClick={()=>handleDeletePaycode(i)} />
  </Form.Group>
  )
} 


</Grid>
</Form>

   </Modal.Content>
   <Modal.Actions>
     <Button color='black' onClick={() => setOpen(false)}>
       Finished
     </Button>
   </Modal.Actions>
 </Modal>
 <Divider />
        <Form.Button color='green'>Submit Correction</Form.Button>
      </Form>
</Segment>
 </Container>
  )
}

export default Ticket






