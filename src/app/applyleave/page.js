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
      <div className="mx-10 my-8 text-4xl font-semibold text-gray-800">
        <button className="hover:text-gray-400" type="button" onClick={handleClick}>
          {' '}
          <IoIosArrowBack />
        </button>
      </div>
      <Form />
    </div>
  );
}
