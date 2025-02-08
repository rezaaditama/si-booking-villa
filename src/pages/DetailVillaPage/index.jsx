import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import DatePicker from '../../components/DatePicker';
import Navbar from '../../components/Navbar';
import { createCart } from '../../services/cartService';
import { getVillasById } from '../../services/villasService';

const DetailVillaPage = () => {
  const { id } = useParams();
  const [villas, setVillas] = useState([]);
  const [path, setPath] = useState('');
  const [dates, setDates] = useState({ checkIn: '', checkOut: '' });

  useEffect(() => {
    getVillasById(id, (data) => {
      const datas = JSON.parse(data.villa_path);
      setPath(datas);
      setVillas(data);
    });
  }, [id]);

  const handlePesan = () => {
    const user = JSON.parse(localStorage.getItem('username'));

    if (dates.checkIn === '') {
      alert('Tolong Isi Data Dengan Benar');
    } else {
      const dataCart = {
        user_id: user.user_id,
        villa_id: villas.villa_id,
        check_in: dates.checkIn,
        check_out: dates.checkOut,
        status: false,
      };
      createCart(dataCart);

      window.location.href = '/cart';
    }
  };

  const handleDateChange = (dates) => {
    setDates(dates);
  };

  return (
    <div className='min-h-screen bg-slate-100'>
      <Navbar />
      <div>
        <Card className='flex justify-center mt-10 pb-20 space-x-14 items-center'>
          <div className='h-[75vh] w-1/2'>
            <Card.Header
              image={path}
              alt={villas.villa_name}
              className={'rounded h-[75vh]'}
            />
          </div>
          <div className='w-1/3 items-center shadow-md h-fit p-2 space-y-2 bg-slate-800 rounded text-white px-3'>
            <h1 className='text-center font-bold text-xl'>
              {villas.villa_name}
            </h1>
            <p className='text-center'>Location : {villas.villa_location}</p>
            <div className=''>
              <DatePicker
                idIn={'checkIn'}
                idOut={'checkOut'}
                onDateChange={handleDateChange}
              />
            </div>
            <p className='text-md'>{villas.villa_facilities}</p>
            <Card.Body
              prize={`Rp. ${Number(villas.villa_prize).toLocaleString('id-ID', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}`}
              type={'detail'}
              className={'line-clamp-none'}
              onClick={() => handlePesan()}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DetailVillaPage;
