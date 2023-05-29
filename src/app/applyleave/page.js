'use client';
import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';
import Form from './components/form';

export default function ApplyLeave() {
  const router = useRouter();
  function handleClick() {
    router.push('/');
  }
  return (
    <div>
      <div className="text-4xl font-semibold mx-10 my-8 text-gray-800">
        <button className="hover:text-gray-400" type="button" onClick={handleClick}>
          {' '}
          <IoIosArrowBack />
        </button>
      </div>
      <Form />
    </div>
  );
}
