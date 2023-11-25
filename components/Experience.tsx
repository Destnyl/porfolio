const navigation = [
    { title: '56', description: 'Client'},
    { title: '56', description: 'Client'},
    { title: '56', description: 'Client'},
    { title: '56', description: 'Client'}
  ]

const Experience = () => {
    return ( 
                 <div  className="text-center m-24 grid grid-cols-1 gap-x-1 md:grid-cols-4  border-0 rounded-md overflow-hidden h-52">
        {           
            navigation.map((item) => (
            <div 
                className="bg-stone-900 flex flex-col j`ustify-center"
                key={item.title}
            >
                <h1 className="text-green-600">{item.title}</h1>
                <p>{item.description}</p>
            </div>
            )) 
        }
        </div>
     );
}
 
export default Experience;