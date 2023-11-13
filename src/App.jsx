import './App.css'
import FormComponent from './components/FormComponent/FormComponent.jsx'
import HeaderComponent from './components/Header/HeaderComponent.jsx'
import UsersCard from './components/UsersCard/UsersCard'
import { FormProvider } from './contexts/FormContext/FormContext'

function App() {
  return (
    <FormProvider>
        <HeaderComponent />
        <FormComponent />
        <UsersCard />
    </FormProvider>
  )
}

export default App
