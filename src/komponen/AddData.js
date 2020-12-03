import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class AddData extends React.Component {
    
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }
    
    onChangeHarga=(harga)=>{
        this.props.onHargaChange(harga)
        
    }
 
   

    render() {
        let pengiriman = this.props.jenisPengiriman;
        let berat = parseInt(this.props.berat) ;
        let volume = parseInt(this.props.volume);
        let harga = this.props.harga
     
        if(pengiriman == 'Express'){
            if(berat>volume){
                harga=15000*berat
            }else if(volume>berat){
                harga=15000*(volume/100)
            }
            else{
                harga=0
            }
           
        }
        else if(pengiriman == 'Standard'){
            if(berat>volume){
                harga=10000*berat
            }else if(volume>berat){
                harga=10000*(volume/100)
            }else{
                harga=0
            }
          
        }
      
        return (
            <div className='container'>
         <div className="form-group">
        <label >Nama Pengirim</label>
         <input onChange={this.props.onPengirimChange} value={this.props.namaPengirim} type="text" className="form-control" id="pengirim" placeholder="Nama Pengirim"/>
         <label>Nama Penerima</label>
         <input onChange={this.props.onPenerimaChange} value={this.props.namaPenerima} type="text" className="form-control" id="penerima" placeholder="Nama Penerima"/>
         <label>Alamat Penerima</label>
         <input onChange={this.props.onAlamatPenerimaChange} value={this.props.AlamatPenerima} type="text" className="form-control" id="alamat penerima" placeholder="Alamat Penerima"/>
         
         <label>Volume</label>
         <input onChange={this.props.onVolumeChange} value={volume} min="100" type="number" className="form-control" id="volume" placeholder="Volume"/>
         <label>Berat</label>
         <input onChange={this.props.onBeratChange} value={berat} min='0' type="number" className="form-control" id="berat" placeholder="Berat"/>
         <label>Tanggal Pengiriman</label>
         <input  value={this.props.tanggalPengiriman}  type="text" className="form-control" id="berat" placeholder="Berat"/>
         
        
         <label>Jenis Pengiriman</label>
         <select onChange={this.props.onJenisChange} value={this.props.jenisPengiriman} className="form-control">
         <option>Default select</option>
         <option value="Express">Express</option>
         <option value="Standard">Standard</option>
         </select>
        <label>Harga = {harga}</label>
         <input type="text" onChange={this.props.onHargaChange} vaue={this.props.harga} ref={this.myRef} className="form-control" id="harga" placeholder="Harga"/>
        </div>
        <div className="col-auto my-1">
      <button onClick={this.props.onClick} type="submit" className="btn btn-primary">Submit</button>
    </div>
        </div>
        
            
        );
    }
}

export default AddData;