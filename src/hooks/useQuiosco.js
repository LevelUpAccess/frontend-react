import { useContext } from 'react'

//Este es el export default QuioscoContext que esta al final de QuioscoProvider
import QuioscoContext from '../context/QuioscoProvider'


//Cuando yo mande llamar este hook useQuiosco, va a utilizar el context de QuioscoContext, y va a tener acceso al value de QuioscoProvider
const useQuiosco = () => {
    return useContext(QuioscoContext)
}

export default useQuiosco