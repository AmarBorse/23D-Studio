// Re-mounts on every navigation, so the blue curtain plays as a page transition.
export default function Template({ children }) {
  return (
    <>
      <div className="loader" aria-hidden="true">
        <img src="/media/logo-light.png" alt="" />
      </div>
      {children}
    </>
  );
}
