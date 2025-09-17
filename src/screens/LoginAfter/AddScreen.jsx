import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Colors, Fonts } from '../../constants'
import { FormInputs } from '../../components'
import { buildSchema } from '../../utils'

const AddScreen = ({ route, navigation }) => {
  const { fields, title, onSubmit, setData, data } = route.params;

  const schema = buildSchema(fields);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: fields.reduce((acc, field) => {
      let value = data ? data[field.key] ?? '' : '';

      // Special case: parent should be the _id, not object
      if (field.key === 'parent' && value && typeof value === 'object') {
        value = value._id;
      }

      // 👇 ensure numbers are converted to string for TextInput
      acc[field.key] = typeof value === 'number' ? value.toString() : value;
      return acc;
    }, {}),
    resolver: yupResolver(schema)
  });


  const handleFormSubmit = (formData) => {
    const finalData = data?._id ? { ...formData, _id: data._id } : formData;
    onSubmit(finalData);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        {data?._id ? `Edit ${title}` : `Create ${title}`}
      </Text>

      {fields.map((field) => (
        <FormInputs
          key={field.key}
          control={control}
          name={field.key}
          label={field.label}
          placeholder={field.placeholder}
          multiline={field.type === 'textarea'}
          errors={errors}
          type={field.type}          // 👈 Pass type
          options={field.options}    // 👈 Pass options for dropdown
        />
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleFormSubmit)}
      >
        <Text style={styles.buttonText}>
          {data?._id ? `Update ${title}` : `Add ${title}`}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default AddScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    padding:20,
    // borderWidth:1,
    // borderColor:'red'
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
    marginBottom: 50
  },
  buttonText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 16,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  }
})


  // const handleFormSubmit = (formData) => {

  //   if (data) {
  //     // 👇 update existing
  //     setData(prev =>
  //       prev.map(p => (p._id === data._id ? { ...p, ...formData } : p))
  //     );
  //   } else {
  //     // 👇 create new
  //     setData(prev => [...prev, { ...formData }]); // no fake id, backend provides _id
  //   }

  //   onSubmit(formData, data);
  //   navigation.goBack();
  // };
  

// ========================================================================================== //
// Dynamically generate Yup schema based on fields
// const schema = Yup.object().shape(
//   fields.reduce((acc, field) => {
//     let validation = Yup.string()
//     if (field.type === 'number') {
//       validation = Yup.number().typeError('Must be a number')
//     }
//     if (field.required) {
//       validation = validation.required(`${field.label} is required`)
//     }
//     acc[field.key] = validation
//     return acc
//   }, {})
// )


// ========================================================================================== //
// const { control, handleSubmit, formState: { errors } } = useForm({
//   defaultValues: fields.reduce((acc, field) => {
//     acc[field.key] = '';
//     return acc
//   }, {}),
//   resolver: yupResolver(schema)
// })

// const handleFormSubmit = (formData) => {
//   setData(prev => [...prev, { id: Date.now(), ...formData }]);
//   onSubmit();
//   console.log('formData', formData);
//   navigation.goBack();
// }