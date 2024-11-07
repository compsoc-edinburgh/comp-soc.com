import Heading from '@/components/heading'

const IRC = () => {
  return (
    <div className="lg:w-4/5 mx-auto pt-12">
      <Heading title="Internet Relay Chat" />
      <p className="my-4 text-lg">
        To keep in touch online, we use IRC and Discord. Both are{' '}
        <em className="font-semibold">bridged</em> to each other, so feel free
        to join one rather than the other, or both!
      </p>

      <p className="mb-4">
        We have multiple channels on ImaginaryNet (our IRC server), but our
        primary channel is <code>#compsoc</code>.
      </p>

      <p className="mb-4">
        The full list of &quot;channels&quot; we may want to join include:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <code>#compsoc</code>
        </li>
        <li>
          <code>#inf1</code>, <code>#inf2</code>, <code>#inf3</code>,{' '}
          <code>#inf4</code>, or <code>#inf5</code> (depending on your academic
          year)
        </li>
        <li>
          For some of our Special Interest Groups and hobbies:
          <ul className="list-circle pl-6 mt-2 space-y-1">
            <li>
              <code>#cs-sigint</code>
            </li>
            <li>
              <code>#sigweb</code>
            </li>
            <li>
              <code>#tardis</code> - let&apos;s do cool server stuff!
            </li>
            <li>
              <code>#books</code>
            </li>
            <li>
              <code>#☕</code>
            </li>
            <li>
              <code>#music</code>
            </li>
            <li>
              <code>#cooking</code>
            </li>
            <li>
              <code>#fitness</code>
            </li>
            <li>
              <code>#houseplants</code>
            </li>
            <li>
              <code>#networking</code> - bridged to <code>#homelab</code> on
              Discord
            </li>
            <li>
              <code>#keebsig</code>
            </li>
            <li>
              <code>#petssss</code>
            </li>
            <li>
              <code>#television</code>
            </li>
          </ul>
        </li>
        <li>
          <code>#minecraft</code> - we have a Minecraft server!
        </li>
        <li>
          <code>#careers</code>
        </li>
        <li>
          <code>#coding-help</code>
        </li>
        <li>
          <code>#random</code> we aren&apos;t sure what goes on here either
        </li>
      </ul>

      <h2 id="joining-irc-" className="text-2xl font-bold mb-4">
        Joining IRC{' '}
        <a
          href="https://www.irccloud.com/invite?channel=%23sigweb&amp;hostname=irc.imaginarynet.uk&amp;port=6697&amp;ssl=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block align-middle"
        >
          <img
            src="https://www.irccloud.com/invite-svg?channel=%23sigweb&amp;hostname=irc.imaginarynet.uk&amp;port=6697&amp;ssl=1"
            height="18"
            alt="IRC Cloud Invite"
            className="ml-2"
          />
        </a>
      </h2>

      <p className="mb-4">
        Clients are needed to connect to an IRC server, but you do not need to
        create an account —&nbsp;these clients can be online (e.g, KiwiIRC, or{' '}
        <a
          href="https://irccloud.com/"
          className="text-blue-600 hover:underline"
        >
          IRCCloud
        </a>
        ) or installed on your computer (HexChat).
      </p>

      <p className="mb-4">
        If you already have an IRC client installed on your device, just{' '}
        <a
          href="ircs://irc.imaginarynet.uk/#compsoc"
          className="text-blue-600 hover:underline"
        >
          click here
        </a>{' '}
        to join the server.
      </p>

      <p className="mb-6">
        Be patient, with IRC you won&apos;t see any messages prior to the time
        you <em className="font-semibold">connect</em>. Since Discord is
        bridged, you&apos;ll be able to see the chat history prior to your
        registration!
      </p>

      <h2 id="server-details-particulars" className="text-2xl font-bold mb-4">
        Server details particulars
      </h2>

      <p className="mb-4">
        If you already know your way around IRC, here are the connection
        details:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          Server: <code>irc.imaginarynet.uk</code>
        </li>
        <li>
          SSL: <code>yes</code>
        </li>
        <li>
          Port: <code>6697</code>
        </li>
        <li>Channel: as listed above</li>
      </ul>
    </div>
  )
}

export default IRC
