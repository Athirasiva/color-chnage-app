import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className='w-100 align-items-center justify-content-center d-flex' style={{height:'100vh'}}>
    <div className='bg-dark d-flex w-75 align-items-center justify-content-center p-4' style={{height:'80vh'}}>
    <div className='align-iems-center justify-content-center w-75 p-2 d-flex flex-wrap'>

      <h3 className='text-light text-center '>Background Color Change</h3>
      <div className='align-iems-center justify-content-cnter w-75 p-3 d-flex flex-wrap'>

        <Button variant="dark" className='me-3 '>Black</Button>
      <Button variant="warning" className='me-3 '>Yellow</Button>

      <Button variant="primary"className='me-3 '>Blue</Button>{' '}
      <Button variant="secondary"className='me-3'>Gray</Button>{' '}

      <Button variant="danger" className='me-3'>Red</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      </div>
      </div>

    </div>
  </div>
  );
}

export default App;
