import React, { useState, useEffect } from 'react';
import { post } from '../services/axiosCard'
import { Form, Container, Button, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './Form.css'
import { getCards } from '../services/axiosCard'

export default function FormCheckList() {
  const initialValues = {
    name: '',
    nameCard: ''
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [nameCards, setNameCards] = useState([])
  const history = useHistory()


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';
    if (type == 'checkbox') {
      formValues[name] = checked
    } else {
      formValues[name] = value
    }
    const data = formValues[name] || {};
    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  useEffect(async () => {
    const cards = await (await getCards()).message
    await setNameCards(cards)
    setFormValues({ ...formValues, nameCard: cards[0].name });
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    Object.keys(formValues).forEach((item) => {

      if (formValues[item] == '') {
        delete formValues[item]
      }

    });
    await post({ data: formValues, query: nameCards }).then((res) => {
      setFormValues(initialValues)

      history.push({
        pathname: '/',
        state: res.message,
      });
    })
  }

  return (
    <Container className='container'>
      <Form>
        <Form.Row>
          <Form.Group as={Col} className="coluna">
            <Form.Label>Nome CheckList</Form.Label>
            <Form.Control type="text" name='name' placeholder="Nome do card" value={formValues.name} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group as={Col} className="coluna" >
            <Form.Label>Nome do Card</Form.Label>
            <Form.Control as="select" name='nameCard' value={formValues.nameCards} onChange={handleInputChange}>
              {nameCards.map((item, key) => {
                return <option key={key}>{item.name}</option>
              })}
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row className="button">
          <Button variant="primary" onClick={handleSubmit} type="submit">
            Enviar
          </Button>
        </Form.Row>

      </Form>
    </Container>
  )
}