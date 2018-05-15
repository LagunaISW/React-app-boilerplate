import React, { Component } from 'react';
import styles from './ContactSection.css';
import {
  Container,
  FormGroup,
  InputText,
  TextArea,
  Button,
  Spinner,
  Alert
} from '../../../../common/Components';
import { Element } from 'react-scroll';

export default class ContactSection extends Component {
  constructor (props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit (e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    this.props.contact(name, email, message);
  }
  render () {
    return (
      <div className={styles.base}>
        <Element name='contact' />
        <Container>
          <div className={styles.compactForm}>
            <h3>Contáctanos</h3>
            {this.props.result.isWorking &&
              <Spinner className={styles.spinner} />
            }
            {this.props.result.complete && !this.props.result.ok &&
              <Alert type='danger' onClick={this.props.dismissResult} className={styles.errorAlert}>
                {this.props.result.message}
              </Alert>
            }
            {this.props.result.complete && this.props.result.ok &&
              <Alert type='success' className={styles.successAlert}>
                Hemos recibido tu mensaje. Nos pondremos en contacto contigo en la brevedad.
              </Alert>
            }
            {!this.props.result.isWorking && !this.props.result.ok &&
              <form onSubmit={this.onSubmit}>
                <FormGroup>
                  <InputText
                    required
                    name='name'
                    placeholder='Tu nombre'
                    className={styles.input}
                    onChange={this.onInputChange} />
                </FormGroup>
                <FormGroup>
                  <InputText
                    required
                    type='email'
                    name='email'
                    placeholder='Tu correo electrónico'
                    className={styles.input}
                    onChange={this.onInputChange} />
                </FormGroup>
                <FormGroup>
                  <TextArea
                    required
                    name='message'
                    placeholder='Escribe tu mensaje'
                    className={styles.input}
                    onChange={this.onInputChange} />
                </FormGroup>
                <FormGroup>
                  <Button buttonType='cta' size='large' className={styles.cta}>
                    Enviar
                  </Button>
                </FormGroup>
              </form>
            }
          </div>
        </Container>
      </div>
    );
  }
}
