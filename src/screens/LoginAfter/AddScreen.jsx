import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import FormInputs from '../../components/FormInputs'
import { Colors, Fonts } from '../../constants'

const AddScreen = ({ route, navigation }) => {
  const { fields, title, onSubmit, setData } = route.params;

  // Dynamically generate Yup schema based on fields
  const schema = Yup.object().shape(
    fields.reduce((acc, field) => {
      let validation = Yup.string()
      if (field.type === 'number') {
        validation = Yup.number().typeError('Must be a number')
      }
      if (field.required) {
        validation = validation.required(`${field.label} is required`)
      }
      acc[field.key] = validation
      return acc
    }, {})
  )

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: fields.reduce((acc, field) => {
      acc[field.key] = ''
      return acc
    }, {}),
    resolver: yupResolver(schema)
  })

  const handleFormSubmit = (data) => {
    setData(prev => [...prev, { id: Date.now(), ...data }]);
    onSubmit();
    console.log('data', data);
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>{title}</Text>

      {fields.map((field) => (
        <FormInputs
          key={field.key}
          control={control}
          name={field.key}
          label={field.label}
          placeholder={field.placeholder}
          multiline={field.type === 'textarea'}
          errors={errors}
        />
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleFormSubmit)}
      >
        <Text style={styles.buttonText}>Add {title}</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default AddScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 20
  },
  heading: {
    fontSize: 24,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    marginBottom: 20,
    color: Colors.DEFAULT_SKY_BLUE
  },
  button: {
    backgroundColor: Colors.DEFAULT_SKY_BLUE,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 16,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  }
})