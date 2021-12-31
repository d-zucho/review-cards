import { useForm } from 'react-hook-form'

const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('feedback-number')} type='radio' value='1' />
      <input {...register('feedback-number')} type='radio' value='2' />
      <input {...register('feedback-number')} type='radio' value='3' />
      <input {...register('feedback-number')} type='radio' value='4' />
      <input {...register('feedback-number')} type='radio' value='5' />
      <input {...register('feedback-number')} type='radio' value='6' />
      <input {...register('feedback-number')} type='radio' value='7' />
      <input {...register('feedback-number')} type='radio' value='8' />
      <input {...register('feedback-number')} type='radio' value='9' />
      <input {...register('feedback-number')} type='radio' value='10' />
      <textarea {...register('Feedback', {})} />

      <input type='submit' />
    </form>
  )
}

export default ReviewForm
