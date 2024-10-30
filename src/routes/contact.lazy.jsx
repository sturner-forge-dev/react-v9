import { createLazyFileRoute } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import postContact from '../api/postContact';

export const Route = createLazyFileRoute('/contact')({
  component: ContactRoute
});

function ContactRoute() {
  const mutation = useMutation({
    mutationFn: function (e) {
      e.preventDefault();
      const formaData = new FormData(e.target);

      return postContact(
        formaData.get('name'),
        formaData.get('email'),
        formaData.get('message')
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
        <form onSubmit={mutation.mutate}>
          <input name="name" placeholder="Name" type="text" />
          <input name="email" placeholder="Email" type="email" />
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
