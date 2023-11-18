import React, { useState } from 'react';
import { Select, Input, Button } from 'antd';
import md5 from 'md5'
import sha1 from 'sha1'
import crc32 from 'crc32'
import encodeUrl from 'encodeurl'
function Encryption() {
    const saltRounds = 10;
    const options = [
        { value: 'MD5' },
        { value: 'SHA-1' },
        { value: 'CRC32' }

    ]
   
    const [typeOfEncode, setTypeOfEncode] = useState('')
    const [text, setText] = useState('')
    const [affterEncode, setAffterEncode] = useState('')
    const handleEncode = () => {
        if (typeOfEncode === 'MD5') {

            const k = md5(text)
            setAffterEncode(k)
        } else if (typeOfEncode === 'SHA-1') {

            const k = sha1(text)
            setAffterEncode(k)
        } else if (typeOfEncode === 'CRC32') {
            const k = crc32(text)
            setAffterEncode(k)
        }
        else if (typeOfEncode === 'EncodeURL') {

            const k =encodeUrl(text)
            setAffterEncode(k)
        }
    }
    return (
        <div className="bg-white w-[30%] p-5 rounded-md flex-1 h-[90vh]">
            <div className="text-xl mb-3">
                <b>Hàm băm</b>
            </div>
            <Select
                style={{ width: '100%' }}
                placeholder="Nhập hàm băm"
                onChange={(value) => setTypeOfEncode(value)}
                options={options}
            />
            <div className="text-xl mb-3 mt-3">
                <b>Nhập ký tự</b>
            </div>
            <Input placeholder="Mời nhập ký tự" value={text} onChange={(event) => setText(event.target.value)} />
            <Button className='m-5' onClick={handleEncode} >Mã hóa</Button>
            <div>
                {affterEncode}
            </div>
        </div>
    );
}

export default Encryption;
