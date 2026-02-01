# System Design - Resources Inventory

## Phase 1: Foundation Resources

### 1. Designing Data-Intensive Applications (DDIA)
- **Author**: Martin Kleppmann
- **Summary**: The definitive guide to distributed systems concepts, covering storage, replication, partitioning, and processing.
- **Key Takeaways**:
  - Deep understanding of database internals (LSM trees, B+ trees)
  - Replication strategies and trade-offs
  - Partitioning/sharding approaches
  - Consistency and consensus algorithms
  - Stream processing fundamentals
- **Critical Chapters**:
  - Chapter 3: Storage and Retrieval
  - Chapter 5: Replication
  - Chapter 6: Partitioning
  - Chapter 9: Consistency and Consensus
  - Chapter 11: Stream Processing
- **Difficulty Level**: Advanced
- **Estimated Time**: 40-60 hours

### 2. MIT Distributed Systems Lectures (6.824)
- **Link**: MIT OpenCourseWare
- **Summary**: Graduate-level course on distributed systems with focus on consensus algorithms.
- **Key Takeaways**:
  - Raft consensus algorithm in depth
  - Primary-backup replication
  - Distributed transactions
  - Key-value store implementation
- **Difficulty Level**: Advanced
- **Estimated Time**: 30-40 hours

### 3. Martin Kleppmann YouTube Series
- **Link**: YouTube
- **Summary**: Video lectures covering distributed systems topics from DDIA.
- **Key Takeaways**:
  - Visual explanations of complex concepts
  - CRDTs and eventual consistency
  - Distributed databases deep dive
- **Difficulty Level**: Intermediate to Advanced
- **Estimated Time**: 15-20 hours

## Phase 2: Seminal Papers

### 4. Google File System (GFS)
- **Year**: 2003
- **Summary**: Describes Google's distributed file system designed for large-scale data processing.
- **Key Concepts**:
  - Master-chunkserver architecture
  - Large chunk sizes (64MB)
  - Relaxed consistency model
  - Fault tolerance through replication
- **Relevance**: Foundation for understanding distributed storage
- **Estimated Time**: 3-4 hours

### 5. Amazon Dynamo
- **Year**: 2007
- **Summary**: Highly available key-value store powering Amazon's services.
- **Key Concepts**:
  - Consistent hashing with virtual nodes
  - Vector clocks for versioning
  - Quorum-based reads/writes
  - Merkle trees for anti-entropy
  - Gossip protocol for membership
- **Relevance**: Foundation for Cassandra, Riak, DynamoDB
- **Estimated Time**: 4-5 hours

### 6. Google Spanner
- **Year**: 2012
- **Summary**: Globally distributed, strongly consistent database.
- **Key Concepts**:
  - TrueTime API (GPS + atomic clocks)
  - External consistency
  - Paxos-based replication
  - Two-phase commit across datacenters
- **Relevance**: Understanding global consistency
- **Estimated Time**: 4-5 hours

### 7. Apache Kafka
- **Summary**: Distributed streaming platform.
- **Key Concepts**:
  - Log-based messaging
  - Partitioned topics
  - Consumer groups
  - Exactly-once semantics
- **Relevance**: Event-driven architectures, stream processing
- **Estimated Time**: 3-4 hours

### 8. Facebook Memcache Paper
- **Year**: 2013
- **Summary**: Scaling Memcached at Facebook.
- **Key Concepts**:
  - Look-aside caching pattern
  - Lease mechanism to prevent thundering herd
  - Regional replication
  - Cold cache warming
- **Relevance**: Caching at scale
- **Estimated Time**: 3-4 hours

### 9. Google Chubby
- **Summary**: Lock service for loosely-coupled distributed systems.
- **Key Concepts**:
  - Paxos-based consensus
  - Distributed locking
  - Leader election
  - Session management
- **Relevance**: Understanding coordination services (like ZooKeeper)
- **Estimated Time**: 3-4 hours

### 10. Meta Tectonic Filesystem
- **Summary**: Modern distributed filesystem for Meta's storage needs.
- **Key Concepts**:
  - Separation of metadata and data
  - Block-based storage
  - Multi-tenancy support
- **Relevance**: Modern approaches to distributed storage
- **Estimated Time**: 3-4 hours

## Phase 3: Tech Blogs

### 11. Netflix Tech Blog
- **Link**: netflixtechblog.com
- **Key Articles**:
  - Microservices at Netflix
  - Chaos Engineering
  - Real-time data infrastructure
  - Recommendations architecture
- **Estimated Time**: 10-15 hours (selected articles)

### 12. Uber Engineering Blog
- **Link**: uber.com/blog/engineering
- **Key Articles**:
  - Schemaless (MySQL at scale)
  - Real-time marketplace
  - Machine learning platform
  - Dispatch system design
- **Estimated Time**: 10-15 hours

### 13. Meta Engineering Blog
- **Link**: engineering.fb.com
- **Key Articles**:
  - TAO: Facebook's distributed data store
  - MySQL at Facebook
  - Scaling Memcache
- **Estimated Time**: 10-15 hours

### 14. LinkedIn Engineering Blog
- **Link**: linkedin.com/blog/engineering
- **Key Articles**:
  - Kafka development and usage
  - Distributed tracing
  - Feed architecture
- **Estimated Time**: 8-10 hours

### 15. Pinterest Engineering Blog
- **Link**: medium.com/@Pinterest_Engineering
- **Key Articles**:
  - Scaling MySQL
  - Image processing pipeline
  - Search architecture
- **Estimated Time**: 5-8 hours

## Phase 3: Interview-Specific Resources

### 16. HelloInterview.com
- **Summary**: System Design Delivery Framework and practice problems.
- **Key Features**:
  - Structured framework for interviews
  - Real interview problem sets
  - Mock interview platform
- **Cost**: Varies
- **Estimated Time**: 20-30 hours

### 17. System Design Interview Books by Alex Xu
- **Volume 1 & 2**
- **Summary**: Step-by-step walkthroughs of common system design problems.
- **Problems Covered**:
  - URL shortener
  - Rate limiter
  - Chat system
  - News feed
  - YouTube/Netflix
  - Google Drive
- **Difficulty Level**: Intermediate
- **Estimated Time**: 20-30 hours per volume

### 18. Grokking System Design (Educative.io)
- **Summary**: Interactive course with diagrams and quizzes.
- **Topics Covered**:
  - System design fundamentals
  - 15+ system design problems
  - Glossary of terms
- **Cost**: Subscription
- **Estimated Time**: 40-50 hours

### 19. YouTube Channels

**JordanHasNoLife**:
- Deep technical content
- Paper reviews
- Advanced topics

**System Design Interview (Mikhail Smarshchok)**:
- Interview-focused content
- Common problems
- Clear explanations

**Estimated Time**: 15-20 hours combined

### 20. Newsletters

**ByteByteGo**:
- Weekly system design content
- Visual explanations
- Alex Xu's newsletter

**Quastor**:
- Tech company deep dives
- Engineering blog summaries

## Phase 4: Mock Interview Platforms

### 21. HelloInterview.com
- **Cost**: $200-$380 per session
- **Features**: Expert interviewers, detailed feedback
- **Recommended**: 2-3 sessions

### 22. TryExponent.com
- **Cost**: Subscription
- **Features**: Peer practice, recorded interviews

### 23. Pramp.com
- **Cost**: Free
- **Features**: Peer-to-peer mock interviews

### 24. IGotAnOffer.com
- **Cost**: Per session
- **Features**: Expert interviewers

### 25. Discord Communities
- **Cost**: Free
- **Features**: Find practice partners
- **Examples**: System Design Interview Discord

## Technology Deep-Dives

### Databases to Understand

| Database | Type | Key Concepts |
|----------|------|--------------|
| DynamoDB | Key-Value | Partitioning, provisioned capacity |
| Cassandra | Wide-Column | CQL, consistent hashing |
| MongoDB | Document | Sharding, replica sets |
| MySQL/PostgreSQL | RDBMS | Sharding strategies |
| Redis | In-Memory | Data structures, persistence |
| Elasticsearch | Search | Inverted index, sharding |

### Storage Systems

| System | Use Case | Key Concepts |
|--------|----------|--------------|
| S3/GCS/Azure Blob | Object storage | Eventual consistency, lifecycle |
| HDFS | Big data | Block replication |
| Ceph | Unified storage | CRUSH algorithm |

### Message Queues

| System | Characteristics |
|--------|-----------------|
| Kafka | Log-based, high throughput |
| RabbitMQ | Feature-rich, AMQP |
| AWS SQS | Managed, simple |
| Pulsar | Multi-tenancy, tiered storage |

### Streaming Systems

| System | Use Case |
|--------|----------|
| Kafka Streams | Stream processing |
| Apache Flink | Stateful streaming |
| Spark Streaming | Micro-batch |
| AWS Kinesis | Managed streaming |

## Resource Priority Matrix

| Resource | Priority | Time Investment | ROI |
|----------|----------|-----------------|-----|
| DDIA Book | Critical | 40-60 hrs | Very High |
| Amazon Dynamo Paper | High | 4-5 hrs | Very High |
| Alex Xu Books | High | 40-60 hrs | High |
| HelloInterview | High | 20-30 hrs | Very High |
| Tech Blogs | Medium | 30-40 hrs | High |
| Mock Interviews | Critical | 15-25 hrs | Very High |
| Other Papers | Medium | 20-30 hrs | Medium-High |
