import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form'
import React from 'react'
import { submitUserAction } from '../../action/user/UserAction';

const UserFormFunc = props => {
    const { handleSubmit } = props

    const submit = (data, submitUserAction) => {
        submitUserAction(data)
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
            <label>
                Nome
            </label>

            <Field name="nome" component="input" type="text" />

            <label>
                Email
            </label>
        
            <Field name="email" component="input" type="text" />
            <button type='submit' name='Enviar' title='Envie agora'>
                Enviar
            </button>
        </form>
    );
}

const UserForm = reduxForm({
    form: 'formUser'
})(UserFormFunc);

const mapState = state => ({
     item: state.item,
})


export default connect(mapState, submitUserAction)(UserForm);