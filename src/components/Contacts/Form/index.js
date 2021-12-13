import {useState} from 'react';

function Form({propform , propcontacts}) {
    const [form, setForm] = useState({fullname:'' , phone :''});


    const onChangeInput = (e) =>{
        setForm({...form , [e.target.name] : e.target.value})
    }

    const submitfunc = (e) => {
        e.preventDefault();

        if (form.fullname === '' || form.phone === ''){
            return false;
        }
        
        propform([...propcontacts, form]); //contacts-index prop değer göndermek için

        setForm({fullname:'' , phone:''})  //input içini temizlemek için
   
    };
 
    return (
        <form onSubmit={submitfunc}>
           <div><input name='fullname' value={form.fullname} onChange={onChangeInput} placeholder="Full Name" /> </div> 
           <div><input name='phone' value={form.phone} onChange={onChangeInput}  placeholder="Phone Number"/></div>
            <button className='btn'>ADD</button>
        </form>
    )
}

export default Form;
