import React from 'react'
import myservices from '../../img/myservices.png'
import Image from 'next/image'
import Link from 'next/link'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function aboutIndex() {
    return (
        <div className='container mt-5'>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <Link href="#">
                        <a>
                            <Image src={myservices} />
                        </a>
                    </Link>
                </div>
                <div className="col-lg-6 col-8 ">
                    <p className='fwbold fs-2'>خدمات ما</p>
                    <span className='lh-base'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                    </span>
                    <Link href="#" className=''>
                        <a className='text-start d-block text-black'>
                            بیشتر بخوانید
                            <KeyboardBackspaceIcon />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default aboutIndex