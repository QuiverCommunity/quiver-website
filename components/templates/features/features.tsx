import { DownloadIcon } from '@heroicons/react/outline'
import { FunctionComponent } from 'react'
import Button from '../../button/button'
import Container from '../../container/container'
import Body1 from '../../text/body1'
import Body2 from '../../text/body2'
import Headline from '../../text/headline'
import Subtitle from '../../text/subtitle'
import Title from '../../text/title'
import Benefits from './benefits'

const Protocol: FunctionComponent = () => {
  return (
    <Container className="text-center" id="protocol">
      <Headline>Quiver Community Vision</Headline>
      <Title className="mt-3">An Innovative Way to Value Information</Title>
      <Body1 className="mt-6 mx-auto max-w-md md:max-w-4xl">
        Information is monetized to earn full potential.
        <br />
        Discover how it is converted to real-value NFTs.
      </Body1>

      <div className="mt-24 grid lg:grid-cols-5 lg:gap-8 text-left">
        <div className="lg:col-span-2 flex items-center">
          <div>
            <Subtitle>Decentralized Information Collector Protocol</Subtitle>
            <Body2 className="mt-6">
              DICP, the backbone of Quiver Protocol, is the first ever
              decentralized protocol to collect information to make it
              beneficial for the community. This protocol is run by the
              information collectors, verifiers, purchasers and the governance
              system.
            </Body2>
            <div className="mt-12">
              <Button
                href="/Quiver-Whitepaper-User-2021-05-24.pdf"
                icon={DownloadIcon}
                text
                shadow
              >
                Download Whitepaper
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <img
            className="mx-auto w-full rounded-xl max-w-lg"
            src="/DICP.svg"
            alt="DICP"
          />
        </div>
      </div>

      <Benefits />

      <div className="mt-12 grid lg:grid-cols-5 lg:gap-8 text-left">
        <div className="lg:col-span-3">
          <img
            className="mx-auto w-full rounded-xl max-w-lg"
            src="/reputation.svg"
            alt="Reputation"
          />
        </div>
        <div className="lg:col-span-2 flex items-center">
          <div>
            <Subtitle>
              Reputation Based Community: <br />
              The Source of Trust
            </Subtitle>
            <Body2 className="mt-6">
              Reputation doesn’t have a valuable factor and it’s hard to know
              who to trust. Quiver introduces tokenized reputation through our
              QREP Token to show users’ value in the ecosystem and mutual
              benefits between information providers and investors. <br />
              The better you do, the more reputation you get. The more
              reputation you get, the community’s level of trust in you
              increases.
            </Body2>
            <div className="mt-12">
              <Button
                href="/Quiver-Whitepaper-User-2021-05-24.pdf"
                icon={DownloadIcon}
                text
                shadow
              >
                Download Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Protocol
