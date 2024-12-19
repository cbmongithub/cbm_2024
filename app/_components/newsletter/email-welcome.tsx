export default function EmailWelcome(email: string) {
  return (
    <div>
      <h1>Hello, {email}</h1>
      <p>
        Welcome to the Christian B. Martinez newsletter! You're now subscribed to the latest
        updates.
      </p>
    </div>
  );
}