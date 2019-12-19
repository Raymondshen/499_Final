import React, { useState, useEffect } from 'react';

const ClickList = ({ data, families, callback }) => {
    const makeFontSearch = (e) => {
      let s = e.target.value;
      let r = new RegExp(s, 'i');
      console.log(s, r);
      setList(data.filter(o => r.test(o.name)))
    }
  
    let [list, setList] = useState([]);
    useEffect(() => {
      setList(data);
    }, [data]);
    // let r1 = Math.floor(Math.random() * data.length);
    // let r2 = Math.floor(Math.random() * data.filter((o,i)=>i!=r1).length);
  
    return (<>
      <div className="selectfont-searchbar">
        <input type="search" placeholder="Search" onChange={makeFontSearch} />
      </div>
      <section id="selectfont" className="flex-xs-parent flex-xs-wrap">
        {list.map((o, i) => (
          <div className="font-card" key={i}>
            <div className="font-card-nav flex-xs-parent">
              <p className="txt-purewhite font-card-name" style={{ fontFamily: o.name }}>{o.name}</p>
              <div className="font-card-btns-container flex-xs-parent txt-purewhite">
                <div className={`font-card-btns flex-xs-parent ${o.id === families.first.id ? 'chosen' : ''}`} onClick={() => callback({ first: o })}>H</div>
                <div className={`font-card-btns flex-xs-parent ${o.id === families.second.id ? 'chosen' : ''}`} onClick={() => callback({ second: o })}>B</div>
              </div>
            </div>
            <h4 className="txt-purewhite font-card-dummy" style={{ fontFamily: o.name }}>Aa</h4>
          </div>
        ))}
      </section>
    </>
    );
  }
export { ClickList };