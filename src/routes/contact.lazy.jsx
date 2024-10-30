import { createLazyFileRoute } from '@tanstack/react-router';
import { useFormStatus } from 'react-dom';
import { useMutation } from '@tanstack/react-query';
import postContact from '../api/postContact';

export const Route = createLazyFileRoute('/contact')({
  component: ContactRoute
});

function ContactRoute() {
  const mutation = useMutation({
    mutationFn: function (formData) {
      return postContact(
        formData.get('name'),
        formData.get('email'),
        formData.get('message')
      );
    }
  });

  if (mutation.isError) {
    console.error(mutation.error);
    return <h1>Error: {mutation.error.message}</h1>;
  }

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form action={mutation.mutate}>
          <ContactInput name="name" placeholder="Name" type="text" />
          <ContactInput name="email" placeholder="Email" type="email" />
          <textarea
            name="message"
            placeholder="Type your message"
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

function ContactInput(props) {
  const { pending } = useFormStatus();
  return (
    <input
      disabled={pending}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
