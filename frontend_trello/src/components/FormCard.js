import React, { useState } from 'react';
import { post } from '../services/axiosCard'
import { Form, Container, Button, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './Form.css'

export default function FormCard() {
  const initialValues = {
    name: '',
    desc: '',
    pos: 'bottom',
    due: '',
    dueComplete: 'false',
    idLabels: '',
    urlSource: '',
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [nameList, setNameList] = useState({ nameList: 'A fazer' })
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    Object.keys(formValues).forEach((item) => {

      if (formValues[item] == '') {
        delete formValues[item]
      }

    });

    await post({ data: formValues, query: nameList }).then((res) => {
      setFormValues(initialValues)
      setNameList({ nameList: 'A fazer' })

      history.push({
        pathname: '/list',
        state: res.message,
      });
    })
  }

  return (
    <Container className='container'>
      <Form>
        <Form.Row>
          <Form.Group as={Col} className="coluna">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" name='name' placeholder="Nome do card" value={formValues.name} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group as={Col} className="coluna" controlId="formGridState">
            <Form.Label>Qual será sua lista</Form.Label>
            <Form.Control as="select" name='nameList' value={formValues.nameList} onChange={(e) => { setNameList({ nameList: e.target.value }) }}>
              <option>A fazer</option>
              <option>Em Andamento</option>
              <option>Concluído</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} className="coluna">
            <Form.Label>Data de entrega</Form.Label>
            <Form.Control type="date" name='due' placeholder="Data de entrega" value={formValues.due} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group as={Col} className="coluna" controlId="formGridState">
            <Form.Label>Posição na lista</Form.Label>
            <Form.Control as="select" name='pos' value={formValues.pos} onChange={handleInputChange}>
              <option value="top">Topo da lista</option>
              <option value="bottom">Fim da lista</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} className="coluna" id="concluido" >
            <Form.Check type="checkbox" value='true' name='dueComplete' value={formValues.dueComplete} label="Tarefa já concluída" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group as={Col}></Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} className="coluna" >
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" name='desc' rows={3} value={formValues.desc} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group as={Col} className="coluna" key={'idLabels'} className="mb-3">
            <Form.Label className="block">Adicione labels ao seu card</Form.Label>
            <div className="block">
              <Form.Check
                custom
                name='idLabels'
                value='605bcb46184d2c731b8fc582'
                inline
                label="verde"
                type='checkbox'
                id={'idLabels1'}
              // onChange={handleInputChange}
              />
              <Form.Check
                value='605bcb46184d2c731b8fc585'
                name='idLabels'
                custom
                inline
                label="amarelo"
                type='checkbox'
                id={'idLabels2'}
              // onChange={handleInputChange}
              />
              <Form.Check
                value='605bcb46184d2c731b8fc589'
                name='idLabels'
                custom
                inline
                label="vermelho"
                type='checkbox'
                id={'idLabels3'}
              // onChange={handleInputChange}
              />
              <Form.Check
                value='605bcb46184d2c731b8fc58c'
                name='idLabels'
                custom
                inline
                label="roxo"
                type='checkbox'
                id={'idLabels4'}
              // onChange={handleInputChange}
              />
              <Form.Check
                value='605bcb46184d2c731b8fc58e'
                name='idLabels'
                custom
                inline
                label="azul"
                type='checkbox'
                id={'idLabels5'}
              // onChange={handleInputChange}
              />
            </div>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} className="coluna">
            <Form.Label>Insira uma imagem ao card (cole a url da imagem)</Form.Label>
            <Form.Control type="text" name='urlSource' placeholder="url imagem" value={formValues.urlSource} onChange={handleInputChange} />
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