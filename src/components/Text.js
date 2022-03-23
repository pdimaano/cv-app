import { NoPrint } from 'react-easy-print';
function Text(props) {
    if (props.firstName) {
        return (
            <div className='textSection'>
                <NoPrint single>
                    <span className='material-icons editIcon' onClick={props.handleEdit}>
                        create
                    </span>
                </NoPrint>
                <p>
                    <span className='categoryText'>First Name:</span> {props.firstName}
                </p>
                <p>
                    <span className='categoryText'>Last Name:</span> {props.lastName}
                </p>
                <p>
                    <span className='categoryText'>Email:</span> {props.email}
                </p>
                <p>
                    <span className='categoryText'>Phone:</span> {props.phone}
                </p>
            </div>
        );
    } else if (props.company) {
        return (
            <div className='textSection'>
                <NoPrint single>
                    <span className='material-icons editIcon' onClick={props.handleEdit}>
                        create
                    </span>
                </NoPrint>
                <p>
                    <span className='categoryText'>Company:</span>{' '}
                    {props.companyName}
                </p>
                <p>
                    <span className='categoryText'>Position:</span>
                    {props.position}
                </p>
                <p>
                    <span className='categoryText'>From:</span> {props.from}
                </p>
                <p>
                    <span className='categoryText'>To:</span> {props.to}
                </p>
                <p>
                    <span className='categoryText'>Tasks:</span> {props.tasks}
                </p>
            </div>
        );
    } else {
        return (
            <div className='textSection'>
                <NoPrint single>
                    <span className='material-icons editIcon' onClick={props.handleEdit}>
                        create
                    </span>
                </NoPrint>
                <p>
                    <span className='categoryText'>School:</span> {props.school}
                </p>
                <p>
                    <span className='categoryText'>Major:</span> {props.major}
                </p>
                <p>
                    <span className='categoryText'>From:</span> {props.from}
                </p>
                <p>
                    <span className='categoryText'>To:</span> {props.to}
                </p>
            </div>
        );
    }
}

export default Text;