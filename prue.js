/* 
A data analyst recently joined HackerRank as intern.

As an initial task, data for n days is provided to the intern. Then,
k updates are performed on the data, where each update is of the form [l,r].
This inicates that the subarray of the data starting at index l and ending at index r is negated.
For example, if data = [1,2,3,4] and te updates are [2,4] then the data becomes data = [-1,-2,-3,-4].

Given the initial data k updates, find the fianl data after all updates.

note: 1-based indexing is used.

example
Consider n = 4, data =[1,-4,-5,2], k = 2 and updates = [[2,4],[1,2]].

after the first update, the data becomes data =[1,-4,5,-2].
After second update ,the data becomes data=[-1,-4,5,-2].

the final data is [-1,-4,5,-2].


function description
Complete the funtion getFinalData below.

getFinalData has the following parameters:
    int data [n]: the initial data
    int updates[k][2]: updates in the form of [l,r]

    returns
    int[n]: the final data after updates

    constrainst:
    n >= 1
    n<= 10*5
    k <= 1
    k <= 10



    '''''''''''


    packets are sent to different ports on a computer system based on the hash of their packet ID.
    The value of the hash is as given below:
    hash = mod (packet_id, numberOfPorts)wher mod is the modulus
    operator and takes the mod of the first operand by second operand.

    The ports are numbered from 0 to (number of ports)-1. and a packet is initially sent to the port
    number equal to the hash of its packet ID. Each port requieres t seconds to process an arriving packet.
    If a port is currently processing a packet, any arriving packet is rerouted to the next port number,
    and so on. The list of the ports is circular. If a packet arrives at the last port and it is busy, it is rerouted to the first port.
    Given a list IDs of n packets that arrive 1 per second, find the port to which each packet is finally sent.
    Then first packet is sent at second t=1.

    Each port requires a time t to send a packet. If a port is currently sending a packet,
    this packet is then sent to the next port number , and so on.
    Given a list IDs of n packets that arrive 1 per second, find the port to which each packet is finally sent.
    then first packet is sent at time t=1.

    example numberOfPorts =3
    trasmissionTime = 2
    packetIds= [4,7,10,6]

    The destination ports, assuming no time conflicts are all calculated as packetIds[i]modulo numberOfPorts,
    so [1,1,1,0] in this case. These arrive at time 1,2,3,4.
    The first packet is sent to port 1+1 =2. The third pakecket wants to go port 1 and arrives at time 3.
    Since port 1 is no longer trasnmitting packet 1, it receives the third packet.
    The four packet goes to port 0 without conflicts. the retur arrays is [1,2,1,0].

    function description
    complete the sentTimesfunction in below.

    sentTime has the following parameters(s):
    int numberOfPorts:The nuber of ports in the system
    int transmissionTime: the time for a port to send a packet
    int packetIds[n]: the IDs of the packets in the order in which the arrive

    returns:
    int [n]: the ports to which the packets are sent



*/