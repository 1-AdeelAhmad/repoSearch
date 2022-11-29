import { SearchComponentProps } from '../../../common/types/components';
import InputComponent from '../../../../../components/common/ui/form/InputComponent';

const SearchComponent = ({ handleSearchQuery }: SearchComponentProps) => {
    return (
        <div className='w-1/2 px-5 md:px-20'>
            <InputComponent label='repo search' handleSearchQuery={handleSearchQuery} />
        </div>
    );
};

export default SearchComponent;
