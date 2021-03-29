import React, { useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap'


export default function List(props) {
    const [textInfo, setTextInfo] = useState([]);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        setTextInfo(props.location.state);
        console.log(textInfo);
        if (textInfo.length) {
            setMsg('Dados encontrados:')
        } else {
            setMsg('Nenhum dado encontrado')
        }

    }, []);

    return (
        <>

            <p style={{ display: 'block', textAlign: "center", color: 'red' }}>{msg}</p>


            <Container>
                <Table responsive bordered style={{ marginTop: '20px' }}>
                    <thead responsive>
                        <tr>
                            <td>Card</td>
                            <td>Nome</td>
                            <td>Descrição</td>
                        </tr>
                    </thead>
                    <tbody >
                        {textInfo.map((itemEx, key) => {
                            return <tr key={key}>
                                <td><a href={itemEx.url}>LINK</a></td>
                                <td>{itemEx.name}</td>
                                <td>{itemEx.desc}</td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

