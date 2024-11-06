import Heading from '@/components/heading'

const IRC = () => {
  return (
    <div className="lg:w-4/5 mx-auto pt-12">
      <Heading title="Internet Relay Chat" />
      <p className="my-4 text-lg">
        We have more than just a Facebook group–to keep in touch online, we use
        IRC and Discord. Both are <em className="font-semibold">bridged</em> to
        each other, so feel free to join one rather than the other, or both!
      </p>

      <p className="mb-4">
        We have multiple channels on ImaginaryNet (our IRC server), but our
        primary channel is <code>#compsoc</code>.
      </p>

      <p className="mb-4">
        The full list of "channels" we may want to join include:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <code>#compsoc</code>
        </li>
        <li>
          <code>#inf1</code>, <code>#inf2</code>, <code>#inf3</code>, or{' '}
          <code>#inf4</code> (depending on your academic year)
        </li>
        <li>
          For our Special Interest Groups:
          <ul className="list-circle pl-6 mt-2 space-y-1">
            <li>
              <code>#cs-sigint</code>
            </li>
            <li>
              <code>#networking</code>
            </li>
            <li>
              <code>#hacksig</code>
            </li>
            <li>
              <code>#sigweb</code>
            </li>
            <li>
              <code>#lawtech</code>
            </li>
            <li>
              <code>#sigcoin</code>
            </li>
          </ul>
        </li>
        <li>
          <code>#minecraft</code> - we have a Minecraft server!
        </li>
        <li>
          <code>#tardis</code> is a student research project: let's do cool
          server stuff!
        </li>
        <li>
          <code>#random</code> we aren't sure what goes on here either
        </li>
        <li>
          Extra: <code>#cricket</code>, <code>#cooking</code>
        </li>
      </ul>

      <h2 id="joining-irc-" className="text-2xl font-bold mb-4">
        Joining IRC{' '}
        <a
          href="https://web.archive.org/web/20240422021725/https://www.irccloud.com/invite?channel=%23sigweb&amp;hostname=irc.imaginarynet.uk&amp;port=6697&amp;ssl=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block align-middle"
        >
          <img
            src="https://web.archive.org/web/20240422021725im_/https://www.irccloud.com/invite-svg?channel=%23sigweb&amp;hostname=irc.imaginarynet.uk&amp;port=6697&amp;ssl=1"
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
          href="https://web.archive.org/web/20240422021725/https://irccloud.com/"
          className="text-blue-600 hover:underline"
        >
          IRCCloud
        </a>
        ) or installed on your computer (HexChat).
      </p>

      <p className="mb-4">
        <a
          href="https://web.archive.org/web/20240422021725/https://kiwiirc.com/client/irc.imaginarynet.uk:+6697#compsoc"
          className="text-blue-600 hover:underline"
        >
          You can pop in right away using KiwiIRC
        </a>
        , but if you already have an IRC client installed on your device, just{' '}
        <a
          href="https://web.archive.org/web/20240422021725/ircs://irc.imaginarynet.uk/#compsoc"
          className="text-blue-600 hover:underline"
        >
          click here
        </a>{' '}
        to join the server.
      </p>

      <p className="mb-4">
        The folks over at the{' '}
        <a
          href="https://web.archive.org/web/20240422021725/https://tardis.ed.ac.uk/"
          className="text-blue-600 hover:underline"
        >
          TARDIS project
        </a>{' '}
        also host a web client for you to use, called The Lounge (formerly{' '}
        <em>Shout</em>).{' '}
        <a
          href="https://web.archive.org/web/20240422021725/https://shout.tardis.ed.ac.uk/"
          className="text-blue-600 hover:underline"
        >
          You can login or register on this server here
        </a>
        .
      </p>

      <p className="mb-6">
        Be patient, with IRC you won't see any messages prior to the time you{' '}
        <em className="font-semibold">connect</em>. Since Discord is bridged,
        you'll be able to see the chat history prior to your registration!
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
        <li>
          Channel: <code>#compsoc,#networking,#sigint,#tardis</code>
        </li>
      </ul>
    </div>
  )
}

export default IRC
