import Header from "./components/Header";
import Main from "./components/MainContent";
import ChefClaudeLogo from "./assets/images/chefclaude.svg";

export default function App(){
    return (
        <>
            <Header image={ChefClaudeLogo} alt={'chef claude logo'} name={'Chef Claude'} />
            <Main />
        </>
    );
}