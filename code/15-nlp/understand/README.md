# Neural Reading Comprehension and Beyond -- 陈丹琦的史丹佛博士論文

* https://stacks.stanford.edu/file/druid:gd576xb1833/thesis-augmented.pdf

2.1.3 A Resurgence: The Deep Learning Era

A turning point for this field came in 2015. The DeepMind researchers Hermann et al.
(2015) proposed a novel and cheap solution for creating large-scale supervised training data
for learning reading comprehension models. They also proposed a neural network model —
an attention-based LSTM model named THE ATTENTIVE READER — and demonstrated
that it outperformed symbolic NLP approaches by a large margin. In their experiments,
the ATTENTIVE READER achieved 63.8% accuracy while symbolic NLP systems obtained
50.9% at most on the CNN dataset. The idea of the data creation is as follows: CNN and
Daily Mail are accompanied by a number of bullet points, summarizing aspects of the information contained in the article. They take a news article as the passage and convert one
of its bullet points as a cloze style question by replacing one entity at at time with a placeholder, and the answer is this replaced entity. In order to ensure that systems approaching
this task need to genuinely understand the passage, rather than using world knowledge or a
language model to answer questions, they run entity recognition and coreference resolution
systems and replace all the entity mentions in each coreference chain by an abstract entity
marker e.g., @entity6 (see an example in Table 2.1 (a)). As a result, nearly 1 million data
examples were collected at almost no cost.

Taking a step further, our work (Chen et al., 2016) investigated this first-ever large
reading comprehension dataset and demonstrated that a simple, carefully designed neural
network model (Section 3.2) is able to push the performance to 72.4% on the CNN dataset,
another 8.6% absolute improvement. More importantly, we justified that the neural network
models are better at recognizing lexical matches and paraphrases compared to conventional
feature-based classifiers. However, although this semi-synthetic dataset provides a promising avenue for training effective statistical models, we concluded that the dataset appears to
be noisy due to its method of data creation and coreference errors and is limited for driving
further progress.


Conventional symbolic NLP systems suffer from one severe problem: features are
usually very sparse and generalize poorly. For example, to answer a question “How
many individual libraries make up the main school library?” from a passage “. . .
Harvard Library, which is the world’s largest academic and private library system,
comprising 79 individual libraries with over 18 million volumes.”, a system has to
learn the correspondence between comprising and make up based on indicator features such as:

pwi = comprising ∧ qwj = make ∧ qwj+1 = up.

There is insufficient data to correctly weight most such features. It is a common
problem in all non-neural NLP models. Making use of low-dimensional, dense word
embeddings can effectively alleviate sparsity by sharing statistical strength between
similar words.


2.2.1 Problem Formulation
The task of reading comprehension can be formulated as a supervised learning problem:
given a collection of training examples {(pi
, qi
, ai)}
n
i=1, the goal is to learn a predictor f
which takes a passage of text p and a corresponding question q as inputs and gives the
answer a as output.
f : (p, q) −→ a (2.1)
Let p = (p1, p2, . . . , plp
) and q = (q1, q2, . . . , qlq
)
3 where lp and lq denote the length of
the passage and the question, pi ∈ V for i = 1, . . . , lp and qi ∈ V for i = 1, . . . , lq where
V is a pre-defined vocabulary. Here we only consider the passage p as a short paragraph
represented as a sequence of lp words. It is straightforward to extend it to a multi-paragraph
setting (Clark and Gardner, 2018) where p is a set of paragraphs or decompose it into
smaller linguistic units such as sentences.4


3.1 Previous Approaches: Feature-based Models

We first describe a strong feature-based model that we built in Chen et al. (2016) for cloze
style problems, in particular, the CNN/DAILY MAIL dataset (Hermann et al., 2015). We
will then discuss similar models built for multiple choice and span prediction problems.
For the cloze style problems, the task is formulated as predicting the correct entity a ∈ E
that can fill in the blank of the question q based on reading the passage p (one example can
be found in Table 2.1), where E denotes the candidate set of entities. Conventional linear,
feature-based classifiers usually need to construct a feature vector fp,q(e) ∈ R
d
for each
candidate entity e ∈ E, and to learn a weight vector w ∈ R
d
such that the correct answer a
is expected to rank higher than all other candidate entities:

3.2 A Neural Approach: The Stanford Attentive Reader

3.2.1 Preliminaries
In the following, we outline a minimal set of elements and the key ideas which form the
basis of modern neural NLP models. For more details, we refer readers to (Cho, 2015;
Goldberg, 2017).


關鍵方法：


Word embeddings (把詞轉成向量 -- 用 cbow 之類的算法)

Recurrent neural networks (使用循環神經網路)

Attention mechanism (使用 Attention 注意力模式)

Attention mechanism
The third important component is an attention mechanism. It was first introduced in the
sequence-to-sequence (seq2seq) models (Sutskever et al., 2014) for neural machine translation (Bahdanau et al., 2015; Luong et al., 2015) and has later been extended to other NLP
tasks.
The key idea is, if we want to predict the sentiment of a sentence, or translate a sentence
of one language to the other, we usually apply recurrent neural networks to encode a single
sentence (or the source sentence for machine translation): h1, h2, . . . , hn and use the last
time step hn to predict the sentiment label or the first word in the target language:

...
Attention mechanisms have been proved widely effective in numerous applications and
become an integral part of neural NLP models.

3.2.2 The Model

Let’s first recap the setting of span-based reading comprehension problems: Given a
single passage p consisting of lp tokens (p1, p2, . . . , plp
) and a question q consisting of lq
tokens (q1, q2, . . . , qlq
), the goal is to predict a span (astart, aend) where 1 ≤ astart ≤ aend ≤ lp
so that the corresponding string pastart , pastart+1, . . . , paend gives the answer to the question.


