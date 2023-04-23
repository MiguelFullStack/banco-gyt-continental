import React from 'react'

export const CreditCardInput = ({card, month, year, cvv, handleChange, handleBlur}) => {
  return (
    <div className='flex flex-col gap-2'>

      <input
        required
        className="outline-none w-[160px] h-[28px] text-[#032a53] rounded-[10px] p-[7px]"
        onChange={handleChange}
        name='card' 
        type="number" 
        placeholder='Numero de tarjeta'
        value={card}
        onBlur={handleBlur}
      />

        <div className='flex gap-2 justify-between'>
                    
            <select 
                required 
                name="month" 
                value={month}
                className="outline-none w-[70px] h-[28px] text-[#032a53] rounded-[10px] pl-1"
                onChange={handleChange}
            >
                {
                    [...Array(13)].map( (_, i) => {
                        if (i == 0) {
                            return (
                                <option value='mes' key={i} className='font-normal '>mes</option>
                            )
                        }
                        return (
                            <option value={i} key={i} className='font-normal '>{i < 10 ? `0${i}` : i }</option>
                        )
                    })
                }
            </select>
            <select 
                required 
                name="year"
                value={year}
                className="outline-none w-['70  px] h-[28px] text-[#032a53] rounded-[10px] pl-1"
                onChange={handleChange}    
            >
                {
                    [...Array(15)].map( (_, i) => {

                        if (i == 0) {
                            return (
                                <option value={'año'} key={i} className='font-normal'>año</option>
                            )
                        }
                        
                        return (
                            <option value={2021 + i} key={i++} className='font-normal' >{ 2021 + i }</option>
                        )
                    })
                }
            </select>

        </div>
        
        <input
            required
            onChange={handleChange}
            name='cvv' 
            type="password"
            inputMode='numeric' 
            placeholder='cvv'
            className="outline-none w-[160px] h-[28px] text-[#032a53] rounded-[10px] p-[7px]"
            value={cvv.slice(0, 3).replace(/[^0-9]*$/, '')}
            onBlur={handleBlur}
        />

    </div>
  )
}
