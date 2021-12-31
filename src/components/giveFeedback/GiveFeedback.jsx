import Card from '../card/Card'
import './giveFeedback.css'

const GiveFeedback = () => {
  return (
    <div>
      <Card>
        <div className='review-number'>
          <div className='review-number number1'>1</div>
          <div className='review-number number2'>2</div>
          <div className='review-number number3'>3</div>
          <div className='review-number number4'>4</div>
          <div className='review-number number5'>5</div>
          <div className='review-number number6'>6</div>
          <div className='review-number number7'>7</div>
          <div className='review-number number8'>8</div>
          <div className='review-number number9'>9</div>
          <div className='review-number number10'>10</div>
        </div>
        <div className='review-text'>
          <textarea
            name='feedback-text'
            id='form-feedback-text'
            cols='30'
            rows='10'></textarea>
        </div>
      </Card>
    </div>
  )
}

export default GiveFeedback

// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function Form() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>

//       <input {...register} type="radio" value="1" />
//       <input {...register} type="radio" value="2" />
//       <input {...register} type="radio" value="3" />
//       <input {...register} type="radio" value="4" />
//       <input {...register} type="radio" value="5" />
//       <input {...register} type="radio" value="6" />
//       <input {...register} type="radio" value="7" />
//       <input {...register} type="radio" value="8" />
//       <input {...register} type="radio" value="9" />
//       <input {...register} type="radio" value="10" />
//       <textarea {...register("Feedback", {})} />

//       <input type="submit" />
//     </form>
//   );
// }
