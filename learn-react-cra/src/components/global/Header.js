import goat from '../../images/goat.png'



export default function Header() {
  // console.log("props =======>", props);
  return (
    <header>
      <div className="logo">
      <img
        src={goat}
        alt="profile picture"
        width={100}
      />
      </div>

      <p>
        <span>My Linktree</span>
        <br/>
        Welcome to My Linktree
      </p>
    </header>
  );
}
