interface label {
    title: String
}

const Section = (props: label) => {
    return ( 
        <div className="text-xs text-emerald-600">
            ---{props.title}
        </div>
     );
}
 
export default Section;