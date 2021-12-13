import {useState} from 'react';

function List({propcontacts}) {
   const[filterText, setFilterText] = useState ('');

   const filtered = propcontacts.filter((ornek) => {  //filtreleme işlemi
    return Object.keys(ornek).some((dene) => 
    ornek[dene]
    .toString()
    .toLowerCase()
    .includes(filterText.toLocaleLowerCase()) //büyük harf küçük harf ayrımını kaldırmak için
     );
   });

    return (
        <div>
            <input placeholder='filter text' value={filterText} onChange={(e) => setFilterText(e.target.value)}></input>
            <ul className='list'> 
                {/* filtered yukarıdaki değişkenden geldi.önceden props adı (propcontacts) vardı.sebebi arama yaparken harfler uyuşmyorsa göstermemek*/}
                {filtered.map((contact , i) => ( 
                <li key={i}><span>{contact.fullname}</span> <span>{contact.phone}</span> </li>))}   
            </ul>
            <p>{filtered.length}</p>
        </div>
    )
}

export default List;
