import { NoPrint } from 'react-easy-print';
function Text(props) {
    if (props.firstName) {
        return (
            <div className='text-section'>
                <NoPrint single>
                    <span className='material-icons edit-icon' onClick={props.handleEdit}>
                        create
                    </span>
                </NoPrint>
                <p>
                    <span className='category-text'>First Name:</span> {props.firstName}
                </p>
                <p>
                    <span className='category-text'>Last Name:</span> {props.lastName}
                </p>
                <p>
                    <span className='category-text'>Email:</span> {props.email}
                </p>
                <p>
                    <span className='category-text'>Phone:</span> {props.phone}
                </p>
            </div>
        );
    } else if (props.company) {
        return (
            <div className='text-section'>
                <NoPrint single>
                    <span className='material-icons edit-icon' onClick={props.handleEdit}>
                        create
                    </span>
                </NoPrint>
                <p>
                    <span className='category-text'>Company:</span>{' '}
                    {props.company}
                </p>
                <p>
                    <span className='category-text'>Title:</span>
                    {props.title}
                </p>
                <p>
                    <span className='category-text'>From:</span> {props.from}
                </p>
                <p>
                    <span className='category-text'>To:</span> {props.to}
                </p>
                <p>
                    <span className='category-text'>Tasks:</span> {props.tasks}
                </p>
            </div>
        );
    } else {
        return (
            <div className='text-section'>
                <NoPrint single>
                    <span className='material-icons edit-icon' onClick={props.handleEdit}>
                        create
                    </span>
                </NoPrint>
                <p>
                    <span className='category-text'>School:</span> {props.school}
                </p>
                <p>
                    <span className='category-text'>Major:</span> {props.major}
                </p>
                <p>
                    <span className='category-text'>From:</span> {props.from}
                </p>
                <p>
                    <span className='category-text'>To:</span> {props.to}
                </p>
            </div>
        );
    }
}

export default Text;