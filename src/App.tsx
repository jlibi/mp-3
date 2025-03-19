import './App.css'
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Nav from "./containers/Nav.tsx";
import Home from "./Components/Home.tsx";
import Competencies from "./Components/Competencies.tsx";
import Education from "./Components/Education.tsx";
import Experience from "./Components/Experience.tsx";
import Skills from "./Components/Skills.tsx";
import Projects from "./Components/Projects.tsx";
import {GlobalStyles, PageWrapper, Container} from "./containers/Styles.tsx"
import Header from "./containers/Header.tsx";
import Footer from "./containers/Footer.tsx";



function Root() {
  return (
      <PageWrapper>
          <Header/>
          <Container>
          <Nav/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/competencies" element={<Competencies />}/>
              <Route path="/education" element={<Education/>}/>
              <Route path="/experience" element={<Experience/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/projects" element={<Projects/>}/>
          </Routes>
          </Container>
          <Footer />
      </PageWrapper>
  );
}

const router= createBrowserRouter([
  {path: "*", Component: Root},
]);


export default function App() {
  return (
      <>
      <GlobalStyles />
      <RouterProvider router={router} />
      </>
)
}

