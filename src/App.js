import React, {useState} from 'react';
import mockData from './mockup';
import './App.css';

function App() {
  const [activeCourse, setActiveCourse] = useState(null);

  const tab = {
    paddingRight: '20px',
    paddingLeft: '20px',
    cursor: 'pointer',
    fontFamily: 'Lato, sans-serif'
  }

  const tabFont = {
    marginBottom: '10px',
    fontWeight: '800',
    marginTop: '10px'
  }

  return (
    <div style={{ display: 'flex', paddingTop: '30px', justifyContent: 'center'}}>
      <div style={{ paddingRight: '20px', flexBasis: '50%'}}>
        <div>
          {
            activeCourse && activeCourse.source ? (
                <iframe
                    width={'100%'}
                    height={'300px'}
                    src={activeCourse.source}
                />
            ) : (
                <iframe
                    width={'100%'}
                    height={'300px'}
                    src={'http://techslides.com/demos/sample-videos/small.mp4'}
                />
            )
          }
        </div>
        <div style={{ display: 'flex'}}>
          <div style={tab}>
            <div style={tabFont}>
              Overview
            </div>
            {
              activeCourse && activeCourse.overview ? (
                  <div>
                    {activeCourse.overview}
                  </div>
              ) : (
                  <div>
                    -
                  </div>
              )
            }
          </div>
          <div style={tab}>
            <div style={tabFont}>
              Q and A
            </div>
            {
              activeCourse && activeCourse.qAndA ? activeCourse.qAndA.map((valueQAndA) => {
                return (
                    <div>
                      {valueQAndA.value}
                    </div>
                )
              }) : (
                  <div>
                    -
                  </div>
              )
            }
          </div>
          <div style={tab}>
            <div style={tabFont}>
              Notes
            </div>
            {
              activeCourse && activeCourse.notes ? activeCourse.notes.map((valueNotes) => {
                return (
                    <div>
                      {valueNotes.value}
                    </div>
                )
              }) : (
                  <div>
                    -
                  </div>
              )
            }
          </div>
          <div style={tab}>
            <div style={tabFont}>
              Announcement
            </div>
            {
              activeCourse && activeCourse.announcement ? (
                  <div>
                    {activeCourse.announcement}
                  </div>
              ) : (
                  <div>
                    -
                  </div>
              )
            }
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
        <div style={{
          paddingLeft: '15px',
          paddingRight: '15px',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
        }}>
          <div>
            <div style={{
              paddingTop: '20px',
              paddingBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div>
                Course Content
              </div>
              <div>
                X
              </div>
            </div>
            {
              mockData.map((value) => {
                return (
                    <div>
                      <div
                          style={{
                            paddingTop: '20px',
                            paddingBottom: '20px',
                            fontWeight: '800'
                          }}
                      >
                        {value.sectionName}
                      </div>
                      {
                        value.course.map((valueCourse) => {
                          return (
                              <div style={{
                                cursor: 'pointer',
                                paddingLeft: '15px',
                                paddingRight:'15px',
                                paddingTop: '20px',
                                paddingBottom: '20px',
                                textAlign:'left',
                                fontFamily: 'Lato, sans-serif'
                              }}
                                   onClick={() => {
                                     setActiveCourse({
                                       announcement: value.announcement,
                                       notes:value.notes,
                                       qAndA: value.qAndA,
                                       overview: valueCourse.name,
                                       source: valueCourse.source
                                     })
                                   }}
                              >
                                {valueCourse.name}
                              </div>
                          )
                        })
                      }
                    </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
