import { ErrorComponentProps } from './types/components';

const ErrorComponent = ({ error }: ErrorComponentProps) => {
    return (
        <div data-testid='errorComponent'>
            <p className='capitalize'>{error}</p>
        </div>
    );
};

export default ErrorComponent;
