import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class TableData extends React.Component {
    state = {  }
  
    deleteItem=(event)=> {
        
      let index = event.target.getAttribute('data-key')
      let listValue=JSON.parse(localStorage.getItem('Hasil'));
      listValue.splice(index,1)
      this.setState({list:listValue});
      localStorage.setItem('Hasil',JSON.stringify(listValue))
  }
  
    render() {

      this.data =JSON.parse(localStorage.getItem('Hasil'))
     
        return (
          <div className='container'>
          <table className="table table-striped w-auto">
          
            
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Pengirim</th>
                <th>Nama Penerima</th>
                <th>Alamat Penerima</th>
                <th>Jenis Pengiriman</th>
                <th>Tanggal Pengiriman</th>
                <th>Berat</th>
                <th>Volume</th>
                <th>Harga</th>
                <th>Delivery Proses</th>
                <th>Delete</th>
              </tr>
            </thead>
           
          
            <tbody>
              
                {this.data && this.data.map((item,index)=>(
                <tr className="table-info" key={index}>
                  <td>{index}</td>
        <td>{item.namaPengirim}</td>
        <td>{item.namaPenerima}</td>
        <td>{item.AlamatPenerima}</td>
        <td>{item.jenisPengiriman}</td>
                <td>{item.tanggalPengiriman}</td>
        <td>{item.berat}</td>
        <td>{item.volume}</td>
        <td>{item.Harga}</td>
        <td>
          <select  value={this.props.proses[index]} className="form-control">
        <option></option>
         <option value="Delivered">Delivered </option>
         <option value="On Process">On Process</option>
         </select>
         </td>
         <td><button className="button" type="button" value="delete" data-key={index} onClick={this.deleteItem}>Delete</button></td>
                </tr>  
                ))}
       
              
            </tbody>
                 
          
          </table>
          
                      </div>
        );
    }
}

export default TableData;