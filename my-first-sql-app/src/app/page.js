import Header from "./Components/header/Index";
export default function firstPage() {
  return (
    <div>
      <Header/>
      <div className="buttons">
      <button>Help</button>
      <button>My Cards</button>
      <button>My Points</button>
      <button>Settings</button>
      <button>About</button>
      </div>
      <h1>
        Welcome!!!
      </h1>
      <p>Welcome to my welcome page. This is the first of many posts that will get me to undderstand all this better</p>
    </div>
  );
    
}
