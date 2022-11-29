import { RowTitleProps } from '../types/components';

const RowTitle = ({ label }: RowTitleProps) => {
    return (
        <th
            scope='col'
            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize sticky z-10 top-0 bg-gray-200'
            key={label}
        >
            {label}
        </th>
    );
};

export default RowTitle;
