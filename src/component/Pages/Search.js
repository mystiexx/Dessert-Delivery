import React, { Component } from 'react'
import { Container, InputGroup, FormControl } from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'

class Search extends Component {
    render() {
        const {searchChange} = this.props
        return (
            <div>
                <Container className="d-flex flex-wrap">
                    <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" className="addon"><FaSearch/> </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Search" aria-label="Search" onChange={searchChange}
                    aria-describedby="basic-addon1"/>
                    </InputGroup>
                </Container>
            </div>
        )
    }
}

export default Search;