import React from 'react'
import { Carousel } from '../components/imports'
import {
  Wrapper,
  Container,
  FlexBox,
  Flexed,
  Overlay,
  Image,
  Text,
  Parag,
} from '../styles/HomeLayout.element'

const Homelayout = (props) => {
  return (
    <>
      <Carousel />
      <Wrapper>
        <Container>
          {/* flexbox */}
          <FlexBox>
            {/* flex */}
            <Flexed>
              <Overlay>
                <div style={{ width: '70%' }}>
                  <Text to='/'>text</Text>
                  <Parag>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem
                  </Parag>
                </div>
              </Overlay>
              <Image src='/asset/homeprod/pro1.png' />
            </Flexed>
            {/* flex */}
            <Flexed>
              <Overlay>
                <div style={{ width: '70%' }}>
                  <Text to='/'>text</Text>
                  <Parag>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem
                  </Parag>
                </div>
              </Overlay>
              <Image src='/asset/homeprod/pro2.png' />
            </Flexed>
            {/* flex */}
          </FlexBox>

          {/* flexbox */}
          <FlexBox>sales</FlexBox>
          {/* flexbox */}

          <FlexBox>
            <Flexed>
              <Overlay>
                <div style={{ width: '70%' }}>
                  <Text to='/'>text</Text>
                  <Parag>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem
                  </Parag>
                </div>
              </Overlay>
              <Image src='/asset/homeprod/pro3.png' />
            </Flexed>
            <Flexed>
              <FlexBox style={{ margin: 0, flexDirection: 'column' }}>
                <Flexed>
                  <FlexBox style={{ margin: 0 }}>
                    <Flexed>
                      <Overlay>
                        <div style={{ width: '70%' }}>
                          <Text to='/'>text</Text>
                        </div>
                      </Overlay>
                      <Image src='/asset/homeprod/pro4.png' />
                    </Flexed>
                    <Flexed>
                      <Overlay>
                        <div style={{ width: '70%' }}>
                          <Text to='/'>text</Text>
                        </div>
                      </Overlay>
                      <Image src='/asset/homeprod/pro5.png' />
                    </Flexed>
                  </FlexBox>
                </Flexed>
                <Flexed>
                  <Overlay>
                    <div style={{ width: '70%' }}>
                      <Text to='/'>text</Text>
                    </div>
                  </Overlay>
                  <Image src='/asset/homeprod/pro6.png' />
                </Flexed>
              </FlexBox>
            </Flexed>
          </FlexBox>
          {/* flexbox */}
          <FlexBox>
            {/* flex */}
            <Flexed>
              <Overlay>
                <div style={{ width: '70%' }}>
                  <Text to='/'>text</Text>
                  <Parag>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem
                  </Parag>
                </div>
              </Overlay>
              <Image src='/asset/homeprod/pro7.png' />
            </Flexed>
            {/* flex */}
            <Flexed>
              <Overlay>
                <div style={{ width: '70%' }}>
                  <Text to='/'>text</Text>
                  <Parag>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem
                  </Parag>
                </div>
              </Overlay>
              <Image src='/asset/homeprod/pro8.png' />
            </Flexed>
            {/* flex */}
          </FlexBox>
          {/* flexbox */}
        </Container>
      </Wrapper>
    </>
  )
}

export default Homelayout
