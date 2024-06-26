import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import CharacterList from '../Pages/Characters';
import Quiz from '../Pages/Quiz';
import PageNotFound from '../Pages/PageNotFound';
import APIData from '../Pages/API';
import ParentComponent from '../Pages/ParentComponent';
import JasminDragon from '../Pages/JasmineDragon';
function AppRoutes(props) {
    return(
        <Routes>
            {/* index matches on default/home URL: */}
            <Route index element={<Home {...props}/>} />
            <Route path="/characters" element={<CharacterList {...props}/>} />
            <Route path="/quiz" element={<Quiz {...props}/>} />
            <Route path="*" element={<PageNotFound/>}/>
            <Route path="/jasminedragon" element={<JasminDragon {...props} />}/>

        </Routes>
    )
}

export default AppRoutes;