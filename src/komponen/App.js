import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TableData from './TableData'
import AddData from './AddData'
import Home from './Home'



class App extends React.Component {
    state = {
        namaPenerima:'',
        namaPengirim:'',
        Harga:0,
        jenisPengiriman:'',
        berat:0,
        volume:0,
        proses:'',
        AlamatPenerima:'',
        tanggalPengiriman:''
      }
onClick=()=>{
    
    const data = JSON.parse(localStorage.getItem('Hasil'))
    if(data){
        localStorage.setItem('Hasil',JSON.stringify([...data, this.state]))
    }else{
        localStorage.setItem('Hasil',JSON.stringify([this.state]))
    }
  
    console.log(this.state)
    
  
}
 
      onPengirimChange(key, event){
        this.setState({[key]: event.target.value})
    }
    onPenerimaChange(key, event){
        this.setState({[key]: event.target.value})
    }
    onHargaChange(key,event){
        this.setState({[key]: event.target.value})
        
    }
    onAlamatPenerimaChange(key,event){
        this.setState({[key]: event.target.value})
        
    }
    onBeratChange(key, event){
        this.setState({[key]: event.target.value})
    }
    onVolumeChange(key, event){
        this.setState({[key]: event.target.value})
    }
    onJenisChange(key, event){
        this.setState({[key]: event.target.value})
        
    }
    componentDidMount(){
        let data =JSON.parse(localStorage.getItem('proses')) 
        if(data){
            this.setState({...this.state,proses:data})
        }
        const date = new Date().toLocaleString()
        this.setState({...this.state,tanggalPengiriman:date})
        console.log(this.state.tanggalPengiriman)
    }
    onProsesChange( event , index){
        console.log(event)
       let data = JSON.parse(localStorage.getItem('proses'))
      
      
       if(data){
           if (data[index]){
            console.log('tambah')
            data[index]=event.target.value   
            console.log(data)
            this.setState({...this.state,proses:data})
            localStorage.setItem('proses',JSON.stringify(data))
           }else{

           }
          
       }else{
           data=[];
           console.log(index)
           data[index]=event.target.value
           console.log(data)
        this.setState({...this.state,proses:data})
        localStorage.setItem('proses',JSON.stringify(data))

       }
        
    }
    render() {
        let pengiriman = this.state.jenisPengiriman;
        let berat = this.state.berat;
        let volume = this.state.volume;
        let harga = this.state.Harga
        console.log(this.state.tanggalPengiriman)
   
        return (
            <div>
                            <Router>
            <div>
             
              <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link text-white"> Home </Link></li>
                <li><Link to={'/TableData'} className="nav-link text-white">Shown Table</Link></li>
                <li><Link to={'/AddData'} className="nav-link text-white">Add Data</Link></li>
            
           
              </ul>
              </nav>
              <hr />
              <Switch>
                  <Route exact path='/'>  <Home/> </Route>
                  <Route path='/TableData'><TableData onProsesChange={this.onProsesChange.bind(this)} proses={this.state.proses}/> </Route>
                  <Route path='/adddata'>
                 <AddData  
                 onBeratChange={this.onBeratChange.bind(this, 'berat')} 
                 onVolumeChange={this.onVolumeChange.bind(this, 'volume')}  
                 onJenisChange={this.onJenisChange.bind(this, 'jenisPengiriman')} 
                 onHargaChange={this.onHargaChange.bind(this, 'Harga')} 
                 onPengirimChange={this.onPengirimChange.bind(this, 'namaPengirim')} 
                 onPenerimaChange={this.onPenerimaChange.bind(this, 'namaPenerima')}
                 onAlamatPenerimaChange={this.onAlamatPenerimaChange.bind(this,'AlamatPenerima')}
                  namaPengirim={this.state.namaPengirim} 
                  volume={this.state.volume} 
                  berat={this.state.berat} 
                  jenisPengiriman={this.state.jenisPengiriman} 
                  harga={this.state.Harga} 
                  namaPenerima={this.state.namaPenerima} 
                  tanggalPengiriman={this.state.tanggalPengiriman}
                  AlamatPenerima={this.state.AlamatPenerima}
                  onClick={this.onClick}/> 
                  </Route>                
             </Switch>
            </div>
          </Router>
               
            </div>
            
        );
    }
}

export default App;